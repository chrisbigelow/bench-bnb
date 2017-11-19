export function signup(params) {
    return $.ajax({
      url: "/api/users",
      method: "POST",
      data: params
    });
}

export function login(params) {
    return $.ajax({
      url: "/api/session",
      method: "POST",
      data: params
    });
}

export function logout() {
    return $.ajax({
      url: "/api/session",
      method: "DELETE"
    });
}