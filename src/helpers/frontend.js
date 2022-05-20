import $ from 'jquery';
import moment from 'moment';


export function onMounted(topnavType=0) {
  $('.topnav-spacer').removeClass('has-bg white-reverse');
  if(topnavType === 1) $('.topnav-spacer').addClass('has-bg');
  if(topnavType === 2) $('.topnav-spacer').addClass('white-reverse');
  return true;
};


export function scrollToRef(ref) {
  if(ref && ref.current){
    window.scrollTo({ top: ref.current.offsetTop - 82, left: 0, behavior: 'smooth' });
  }
};
export function scrollToBottomRef(ref) {
  if(ref && ref.current){
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};


export function formatNumber(value, digits=2) {
  let val = (value / 1).toFixed(digits);
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export function formatDate(value, format='DD/MM/YYYY') {
  let string = moment(new Date(String(value))).format(format);
  if(string) {
    string = string.split('/');
    return `${string[0]}/${string[1]}/${parseInt(string[2])+543}`;
  } else {
    return '';
  }
};
export function formatSeconds(sec) {
  if(sec) {
    sec = Math.round(sec);
    let hours = Math.floor(sec/3600);
    (hours >= 1)? sec -= (hours*3600): hours = '00';
    let min = Math.floor(sec/60);
    (min >= 1)? sec -= (min*60): min = '00';
    (sec < 1)? sec = '00': void 0;
  
    (min.toString().length === 1)? min = '0'+min: void 0;    
    (sec.toString().length === 1)? sec = '0'+sec: void 0;    
    
    return hours+':'+min+':'+sec;
  } else {
    return '00:00:00';
  }
};

export function formatTextSecret(str, showDigits=3) {
  if(str) {
    let len = str.length;
    let res = [...str].map((d, i) => {
      if(i < len - showDigits) return '*';
      else return d;
    }).join('');
    return <span title={str}>{res}</span>;
  } else {
    return '';
  }
};
