import axios from 'axios';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { File } from '../../App';

const faculty: { [key: string]: string } = {
    sk: 'Sarthak Khandelwal',
    dp: 'Dhruv Pasricha',
    ps: 'Pulkit Asri',
    rg: 'Rahul Gandhi',
    sr: 'Shubham Rawal',
    wj: 'Wamika Jha',
    tk: 'Tushar Khanduri',
};

export function AssignFileSwal(data: File) {
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
        inputOptions: faculty,
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
                .post('/files/assign', { sender: '1', receiver: '2', fileId: '15' })
                .then(() => {
                    Swal.fire('Assigned!', `File has been assigned`, 'success');
                })
                .catch(() => {});
        }
    });
}
