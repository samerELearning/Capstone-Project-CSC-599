export default function Alert() {
    return (
        <>
            <div className="alert w-50 align-self-center alert-success alert-dismissible fade show" role="alert">
                Data Added successfully
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </>
    )
}