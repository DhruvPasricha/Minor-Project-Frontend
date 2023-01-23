import axios from 'axios';
import Swal from 'sweetalert2';
import { File, UserStateType } from '../../App';

export function closeFileSwal(data: File, userState: UserStateType | undefined) {
    Swal.fire({
        title: data.fileId,
        html: `<div >
        <span style="font-weight:bold;">File Subject: </span>
        ${data.fileSubject}
        <br/>
        <br/>
        </div> `,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'MARK AS CLOSED',
        cancelButtonText: 'CANCEL',
    }).then((result) => {
        if (result.isConfirmed) {
            axios
                .post('files/close', {
                    fileId: data.fileId,
                    userId: userState?.userId,
                })
                .then(() => {
                    Swal.fire('Closed!', 'File has been marked as closed.', 'success').then(() => {
                        window.location.pathname = '/my-files';
                    });
                });
        }
    });
}
