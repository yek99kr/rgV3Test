import MyComponent from '../../../../slices/DetailMedia1X1';

export default {
  title: 'slices/DetailMedia1X1'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"detail_media1_x1","items":[],"primary":{"media1":{"link_type":"Web","url":"https://slicemachine.dev"},"media1Controls":false,"media2":{"link_type":"Web","url":"http://twitter.com"},"media2Controls":true,"media3":{"link_type":"Web","url":"https://prismic.io"},"media3Controls":true},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _2Rows = () => <MyComponent slice={{"variation":"2Rows","name":"2Rows","slice_type":"detail_media1_x1","items":[],"primary":{"media1":{"link_type":"Web","url":"https://slicemachine.dev"},"media1Controls":true,"media2":{"link_type":"Web","url":"http://twitter.com"},"media2Controls":true},"id":"_2Rows"}} />
_2Rows.storyName = '2Rows'
