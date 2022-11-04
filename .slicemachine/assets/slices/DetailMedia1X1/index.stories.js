import MyComponent from '../../../../slices/DetailMedia1X1';

export default {
  title: 'slices/DetailMedia1X1'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"detail_media1_x1","items":[],"primary":{"media1":{"link_type":"Web","url":"http://twitter.com"},"autoplay1":false,"media2":{"link_type":"Web","url":"https://prismic.io"},"autoplay2":false,"media3":{"link_type":"Web","url":"https://slicemachine.dev"},"autoplay3":true},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _2Rows = () => <MyComponent slice={{"variation":"2Rows","name":"2Rows","slice_type":"detail_media1_x1","items":[],"primary":{"media1":{"link_type":"Web","url":"https://prismic.io"},"autoplay1":false,"media2":{"link_type":"Web","url":"http://twitter.com"},"autoplay2":false},"id":"_2Rows"}} />
_2Rows.storyName = '2Rows'
