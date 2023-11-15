const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Fetch GH Users from API (testing purposes)
// Send Token to increase req
// Get Search Results
export const searchUsers = async (text) => {
  // Set search params
  const params = new URLSearchParams({ q: text });

  const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const { items } = await res.json();

  return items;
};

// Get single user
export const getUser = async (login) => {
  const res = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  // If user is not found, go to not found page
  if (res.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await res.json();

    return data;
  }
};

// Get User Repos
export const getUserRepos = async (login) => {
  // Set search params
  const params = new URLSearchParams({ sort: 'created', per_page: 10 });

  const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await res.json();

  return data;
};
