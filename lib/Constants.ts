export function parseJwt(token) {
    try {
      // Split the token into its three parts
      const base64Url = token.split('.')[1];
      
      // Base64 URL decode the payload
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      
      // Parse the JSON payload
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Failed to parse JWT', e);
      return null;
    }
  }