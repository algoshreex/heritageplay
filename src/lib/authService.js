/**
 * Simple localStorage-based authentication service.
 * Replaces Supabase auth — no external service required.
 *
 * Users and sessions are stored in the browser's localStorage.
 */

const USERS_KEY = "heritageplay_users";
const SESSION_KEY = "heritageplay_session";

// ── helpers ──────────────────────────────────────────────────────────

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setSession(user) {
  const session = {
    user: {
      id: user.id,
      email: user.email,
      full_name: user.full_name,
    },
    loggedInAt: new Date().toISOString(),
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

// ── public API ───────────────────────────────────────────────────────

/**
 * Sign up a new user.
 * @returns {{ user, error }}
 */
export function signUp({ email, password, fullName }) {
  const users = getUsers();

  if (users.find((u) => u.email === email)) {
    return { user: null, error: { message: "An account with this email already exists." } };
  }

  const newUser = {
    id: crypto.randomUUID(),
    email,
    password, // stored as-is (fine for a local-only demo)
    full_name: fullName,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  return { user: newUser, error: null };
}

/**
 * Sign in an existing user.
 * @returns {{ user, error }}
 */
export function signIn({ email, password }) {
  const users = getUsers();
  const user = users.find((u) => u.email === email);

  if (!user) {
    return { user: null, error: { message: "No account found with this email." } };
  }

  if (user.password !== password) {
    return { user: null, error: { message: "Incorrect password. Please try again." } };
  }

  setSession(user);
  return { user, error: null };
}

/**
 * Sign out the current user.
 */
export function signOut() {
  localStorage.removeItem(SESSION_KEY);
}

/**
 * Get the currently logged-in session (or null).
 */
export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

/**
 * Check whether someone is currently signed in.
 */
export function isLoggedIn() {
  return getSession() !== null;
}
