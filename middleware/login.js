// export default function ({ $storage, redirect }) {
//   if (!$storage.getUniversal('api_token')) {
//     return redirect('/')
//   }
// }



export default function ({ store, redirect }) {
  const token = store.state.storage.api_token
  if (!token) {
    return redirect('/')
  }
}