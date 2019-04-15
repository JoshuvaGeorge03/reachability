export async function isReachable(url: string = 'https://www.google.com/') {
  try {
    const result = await fetch(url);
    if (result.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}
