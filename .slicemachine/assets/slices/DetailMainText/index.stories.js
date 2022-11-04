import MyComponent from '../../../../slices/DetailMainText';

export default {
  title: 'slices/DetailMainText'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"detail_main_text","items":[{"creditTitle":"repurpose transparent vortals","creditName":"optimize holistic interfaces","creditLink":{"link_type":"Web","url":"http://google.com"}},{"creditTitle":"utilize magnetic users","creditName":"maximize integrated communities","creditLink":{"link_type":"Web","url":"http://twitter.com"}},{"creditTitle":"synthesize robust relationships","creditName":"utilize bleeding-edge bandwidth","creditLink":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"summary":[{"type":"paragraph","text":"Fugiat do voluptate est ut id consequat anim irure excepteur. Fugiat deserunt officia cupidatat.","spans":[]}],"moreInfo":[{"type":"paragraph","text":"Lorem cupidatat laborum eu nisi.","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _NoReadMore = () => <MyComponent slice={{"variation":"noReadMore","name":"NoReadMore","slice_type":"detail_main_text","items":[{"creditTitle":"engineer transparent supply-chains","creditName":"brand viral web-readiness","creditLink":{"link_type":"Web","url":"http://google.com"}},{"creditTitle":"morph seamless vortals","creditName":"orchestrate leading-edge architectures","creditLink":{"link_type":"Web","url":"http://google.com"}}],"primary":{"moreInfo":[{"type":"paragraph","text":"Mollit cupidatat quis fugiat non nostrud voluptate veniam ex anim pariatur elit laboris pariatur consectetur.","spans":[]}]},"id":"_NoReadMore"}} />
_NoReadMore.storyName = 'NoReadMore'
