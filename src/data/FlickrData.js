let options = {
  base: 'https://www.flickr.com/services/rest/?',
  method: {
    init: 'flickr.interestingness.getList',
    search: 'flickr.photos.search',
  },
  key: 'c0a94718ea348229ebc99f0d38e533a1',
  per_page: 20,
  format: 'json',
  alt: 'galleryImg',
}
let { base, method, key, per_page, format } = options

export const FilckrData = {
  initURL: `${base}method=${method.init}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&privacy_filter=1`,

  searchURL: `${base}method=${method.search}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&&privacy_filter=1&tags=`,
}
