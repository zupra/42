export default function ({ $storage, redirect }) {
  if (!$storage.getUniversal('api_token')) {
    return redirect('/')
  }
}