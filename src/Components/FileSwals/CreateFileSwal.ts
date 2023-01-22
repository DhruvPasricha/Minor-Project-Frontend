import Swal from 'sweetalert2'


export function CreateFileSwal(navigate: any) {

    Swal.fire({
        title: 'Create new file',
        html: `
        
        <div >
      <span style="font-weight:bold;">File Subject: </span>
      <input type="text" id="subject" class="swal2-input" placeholder="Subject">
      <br/>
      <br/>
      </div>`,

        focusConfirm: false,
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'CREATE FILE',
        cancelButtonText: 'CANCEL',
        preConfirm: () => {
          const subject =
            Swal.getPopup()?.querySelector<HTMLInputElement>(
              '#subject'
            )?.value
          
          if (!subject) {
            Swal.showValidationMessage(`Please enter file subject`)
          }
          return { subject: subject }
        },
      }).then((result) => {
        if (result.value?.subject !== undefined) {
          Swal.fire(
            `
        File created. Please assign this file from "Files with me".
      `.trim()
          ).then(() => {
            navigate('/received-files')
          })
        }
      })
}

