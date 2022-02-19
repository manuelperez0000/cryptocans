import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
import Loader from "../loader/loader"
const MySwal = withReactContent(Swal)

const load = false

const Dashboard = () => {

    const alertTest = () => {
        MySwal.bindClickHandler()
        MySwal.fire({
            title: 'Auto close alert!',
        })
        Swal.showLoading()
        /*  MySwal.fire({
             title: <p className="text-danger">Hello World</p>,
             footer: 'Copyright 2018',
             didOpen: () => {
               MySwal.clickConfirm()
             }
           }).then(() => {
             return MySwal.fire(<p className="text-danger">Shorthand works too</p>)
           }) */
    }

    return (
        <>
            <h1>Dashboard</h1>
            {load?<>
            <Loader/>
            </>:<></>}

            <button onClick={alertTest}> Alert test </button>
        </>
    )
}
export default Dashboard