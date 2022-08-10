const goToListPage = (navigate) => {
    navigate('/trips/list')
}

const goToLoginPage = (navigate) => {
    navigate('/login')
}

const goToApkFormPage = (navigate) => {
    navigate('/trips/application')
}

const goToAdminPage = (navigate) => {
    navigate('/admin/trips/list')
}

const goToCreateTripPage = (navigate) => {
    navigate('/admin/trips/create')
}

const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

const goBack = (navigate) => {
    navigate(-1)
}
