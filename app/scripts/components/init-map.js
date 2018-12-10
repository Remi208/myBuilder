export default (callback) => {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD2f96CX7o3oqt96OkNUX2LnJzaLZiPOLk`;
  script.async = true;
  script.defer = true;
  document.querySelector('head').appendChild(script);
  script.onload = () => {
    callback();
  };
  return script;
}
