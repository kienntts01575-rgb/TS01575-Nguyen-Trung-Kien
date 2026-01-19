export function register(user) {
  const users = JSON.parse(localStorage.getItem('users')) || []
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))
}

export function login(email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const found = users.find(
    u => u.email === email && u.password === password
  )
  if (found) {
    localStorage.setItem('currentUser', JSON.stringify(found))
  }
  return found
}

export function logout() {
  localStorage.removeItem('currentUser')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'))
}
