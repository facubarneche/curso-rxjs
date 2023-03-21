import { fromEvent} from "rxjs";
import { map, tap } from "rxjs/operators"
const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nisi at lorem consequat faucibus. Mauris eget bibendum augue. Nullam venenatis arcu libero, et luctus tortor auctor eget. Sed sed malesuada lacus. Nullam facilisis lectus magna, ut vehicula est pharetra at. Nullam consequat, lacus vitae mollis pretium, tortor lorem tincidunt orci, sed eleifend ante mauris et erat. Suspendisse ac lobortis nisi, quis posuere ante. Pellentesque ipsum nibh, consectetur non ullamcorper et, molestie tempus enim. Suspendisse ac magna sapien. Pellentesque a dictum urna. Nunc sit amet ligula risus. Quisque porttitor mi ac congue consequat. Etiam metus nibh, fermentum sit amet velit sed, elementum ullamcorper leo. Nam egestas orci lorem, in maximus orci fermentum sed. Vestibulum tempus nisi sed neque lacinia hendrerit. Suspendisse convallis egestas arcu, at fermentum velit porttitor vitae.
<br/><br/>
In suscipit ex ac nunc tristique, vel imperdiet tellus finibus. Nunc dapibus consequat purus in viverra. Vestibulum a efficitur felis, quis molestie eros. Pellentesque in placerat tellus. Pellentesque molestie id odio sit amet interdum. Duis ligula orci, luctus non nibh eget, semper convallis quam. Phasellus id commodo neque.
<br/><br/>
Vivamus facilisis leo nec tempor commodo. Aliquam ut suscipit orci. Aliquam ultricies pellentesque risus nec consequat. Nulla pulvinar magna elit, vel faucibus diam luctus eget. Morbi vel facilisis leo, eu varius lorem. Suspendisse euismod neque eu sem cursus gravida. Donec nec nisl auctor, aliquet erat sit amet, commodo ante. Nulla id ex dolor.
<br/><br/>
Maecenas viverra arcu in lectus porta, sit amet aliquet felis hendrerit. Aliquam laoreet sapien tellus, sit amet varius mauris pharetra dignissim. Sed a elit odio. Mauris sed commodo turpis. Donec laoreet egestas commodo. Aenean sagittis vehicula ex, sed lobortis nisi viverra at. Quisque elit diam, interdum et mollis interdum, lacinia nec nunc. Curabitur id congue diam. Suspendisse consectetur congue eros, ac vestibulum neque congue ut.
<br/><br/>
Aliquam iaculis consectetur arcu sed fringilla. Vivamus molestie est ac orci tincidunt, sit amet aliquet nisl egestas. Suspendisse est leo, cursus sed elementum nec, convallis quis tortor. Nullam elit elit, commodo ac volutpat eget, tristique a est. Suspendisse porttitor sapien et orci aliquam finibus. Suspendisse ac mattis ante, vel bibendum turpis. Donec et mattis nibh. Sed ac lorem auctor, lobortis orci sit amet, blandit leo. Aenean viverra justo eget sapien vestibulum tempor. Donec in nibh varius nibh feugiat egestas. Sed dignissim convallis sem, ac facilisis ex elementum vel. Curabitur dignissim nisi non ultricies bibendum. Integer ultricies semper neque, nec hendrerit ante maximus pulvinar. In sit amet urna id lacus aliquam sodales sed eget quam. 
<br/><br/>
Maecenas viverra arcu in lectus porta, sit amet aliquet felis hendrerit. Aliquam laoreet sapien tellus, sit amet varius mauris pharetra dignissim. Sed a elit odio. Mauris sed commodo turpis. Donec laoreet egestas commodo. Aenean sagittis vehicula ex, sed lobortis nisi viverra at. Quisque elit diam, interdum et mollis interdum, lacinia nec nunc. Curabitur id congue diam. Suspendisse consectetur congue eros, ac vestibulum neque congue ut.
<br/><br/>
Aliquam iaculis consectetur arcu sed fringilla. Vivamus molestie est ac orci tincidunt, sit amet aliquet nisl egestas. Suspendisse est leo, cursus sed elementum nec, convallis quis tortor. Nullam elit elit, commodo ac volutpat eget, tristique a est. Suspendisse porttitor sapien et orci aliquam finibus. Suspendisse ac mattis ante, vel bibendum turpis. Donec et mattis nibh. Sed ac lorem auctor, lobortis orci sit amet, blandit leo. Aenean viverra justo eget sapien vestibulum tempor. Donec in nibh varius nibh feugiat egestas. Sed dignissim convallis sem, ac facilisis ex elementum vel. Curabitur dignissim nisi non ultricies bibendum. Integer ultricies semper neque, nec hendrerit ante maximus pulvinar. In sit amet urna id lacus aliquam sodales sed eget quam. 
<br/><br/>
Maecenas viverra arcu in lectus porta, sit amet aliquet felis hendrerit. Aliquam laoreet sapien tellus, sit amet varius mauris pharetra dignissim. Sed a elit odio. Mauris sed commodo turpis. Donec laoreet egestas commodo. Aenean sagittis vehicula ex, sed lobortis nisi viverra at. Quisque elit diam, interdum et mollis interdum, lacinia nec nunc. Curabitur id congue diam. Suspendisse consectetur congue eros, ac vestibulum neque congue ut.
<br/><br/>
Aliquam iaculis consectetur arcu sed fringilla. Vivamus molestie est ac orci tincidunt, sit amet aliquet nisl egestas. Suspendisse est leo, cursus sed elementum nec, convallis quis tortor. Nullam elit elit, commodo ac volutpat eget, tristique a est. Suspendisse porttitor sapien et orci aliquam finibus. Suspendisse ac mattis ante, vel bibendum turpis. Donec et mattis nibh. Sed ac lorem auctor, lobortis orci sit amet, blandit leo. Aenean viverra justo eget sapien vestibulum tempor. Donec in nibh varius nibh feugiat egestas. Sed dignissim convallis sem, ac facilisis ex elementum vel. Curabitur dignissim nisi non ultricies bibendum. Integer ultricies semper neque, nec hendrerit ante maximus pulvinar. In sit amet urna id lacus aliquam sodales sed eget quam. 
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo del progressBar
const calcularPorcentajeScroll = (event: any) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    // console.log({scrollTop, scrollHeight, clientHeight})
    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
};

//Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    // tap( console.log ) //Verifica que el % sea correcto
);


progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`
});


















