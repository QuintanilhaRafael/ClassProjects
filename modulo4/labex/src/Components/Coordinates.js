export const goToListPage = (navigate) => {
    navigate('/trips/list')
}

export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToApkFormPage = (navigate) => {
    navigate('/trips/application')
}

export const goToAdminPage = (navigate) => {
    navigate('/admin/trips/list')
}

export const goToCreateTripPage = (navigate) => {
    navigate('/admin/trips/create')
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToHomePage = (navigate) => {
    navigate('/')
}
