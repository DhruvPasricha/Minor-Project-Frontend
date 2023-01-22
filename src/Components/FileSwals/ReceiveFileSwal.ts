import Swal from 'sweetalert2';

export function ReceiveFileSwal(data: any) {
    Swal.fire({
        title: data.id,
        html: `<div >
        <span style="font-weight:bold;">File Subject: </span>
        ${data.subject}
        <br/>
        <br/>
        <span style="font-weight:bold;">Created By: </span>
        ${data.createdby}
        <br/>
        <span style="font-weight:bold;">Currently With: </span>
        ${data.assignedby}
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
            Swal.fire('Received!', 'File has been marked as received.', 'success');
        }
    });
}
