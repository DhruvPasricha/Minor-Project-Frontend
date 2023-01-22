import Swal from 'sweetalert2';

const faculty = {
    sk: 'Sarthak Khandelwal',
    dp: 'Dhruv Pasricha',
    ps: 'Pulkit Asri',
    rg: 'Rahul Gandhi',
    sr: 'Shubham Rawal',
    wj: 'Wamika Jha',
    tk: 'Tushar Khanduri'
  }

export function AssignFileSwal(data: any) {
    Swal.fire({
        title: data.id,
        html: `<div >
        <span style="font-weight:bold;">File Subject: </span>
        ${data.subject}
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
        confirmButtonText: 'MARK AS RECEIVED',
        cancelButtonText: 'CANCEL',
    }).then((result: any) => {
        if (result.isConfirmed) {
            const id = result.value.toString()

            // TODO: 
            // const name = faculty[id]
            Swal.fire('Assigned!', `File has been assigned to ${id}`, 'success');
        }
    });
}
