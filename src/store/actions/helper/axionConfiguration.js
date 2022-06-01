export const baseUrl = "https://localhost:5001/api";
export const header = {
    header: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
}
export const headerAuthorization = {
    header: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
    }
}