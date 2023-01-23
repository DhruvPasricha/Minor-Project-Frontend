import axios from 'axios';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { File, UserStateType } from '../../App';

export function AssignFileSwal(data: File, possibleUsers: { [key: string]: string }, userState: UserStateType | undefined) {
    Swal.fire({
        title: data.fileId,
        html: `<div >
        <span style="font-weight:bold;">File Subject: </span>
        ${data.fileSubject}
        <br />
        <br />
        <span style="font-weight:bold;">Assign to: </span>
        </div> `,
        input: 'select',
        inputOptions: possibleUsers,
        inputPlaceholder: 'Select faculty',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ASSIGN',
        cancelButtonText: 'CANCEL',
    }).then((result: SweetAlertResult<string>) => {
        if (result && result.isConfirmed && result.value) {
            axios
                .post('/files/assign', { sender: userState?.userId, receiver: result.value, fileId: data.fileId })
                .then(() => {
                    if (result.value) Swal.fire('Assigned!', `File has been assigned to ${possibleUsers[result.value]}`, 'success').then(() => {
                        window.location.pathname = '/sent-files';
                    });
                })
                .catch(() => {});
        }
    });
}
