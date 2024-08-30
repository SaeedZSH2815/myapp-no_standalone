export interface ICarouselContext {
  $implicit : string;
  controller : {
    next:()=>void,
    pre:()=>void,
  }
}
