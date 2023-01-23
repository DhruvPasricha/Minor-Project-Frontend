import axios from 'axios';
import Swal from 'sweetalert2';
import { File, UserStateType } from '../../App';

export function ReceiveFileSwal(data: File, userState: UserStateType | undefined) {
    Swal.fire({
        title: data.fileId,
        html: `<div >
        <span style="font-weight:bold;">File Subject: </span>
        ${data.fileSubject}
        <br/>
        <br/>
        <span style="font-weight:bold;">Created By: </span>
        ${data.createdBy}
        <br/>
        <span style="font-weight:bold;">Currently With: </span>
        ${data.assignedBy}
        <br/>
        </div> `,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'MARK AS RECEIVED',
        cancelButtonText: 'CANCEL',
    }).then((result) => {
        if (result.isConfirmed) {
            axios
                .post('files/receive', {
                    fileId: data.fileId,
                    sender: data.assignedByUserId,
                    receiver: userState?.userId,
                })
                .then(() => {
                    Swal.fire('Received!', 'File has been marked as received.', 'success').then(() => {
                        window.location.pathname = '/received-files';
                    });
                });
        }
    });
}
