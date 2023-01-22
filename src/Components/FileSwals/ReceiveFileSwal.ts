import Swal from 'sweetalert2';
import { File } from '../../App';

export function ReceiveFileSwal(data: File) {
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
            // todo: make a post api to mark as received
            Swal.fire('Received!', 'File has been marked as received.', 'success');
        }
    });
}
