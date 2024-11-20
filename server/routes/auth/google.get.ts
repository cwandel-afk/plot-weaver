export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: {
        googleId: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    });
    return sendRedirect(event, "/");
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    return sendRedirect(event, "/");
  },
});
