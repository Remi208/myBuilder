export default () => {
  const inner = $('.file-input__label')[0];

  $('.file-input input[type="file"]').on('change', function (event) {
    if(this.value == ''){
      inner.innerHTML = fileInputName;
    } else {
      if ($(this).val().lastIndexOf('\\')) {
        var separator = '\\';
      } else {
        var separator = '/';
      }
      var thisValue = this.value.split(separator);
      inner.innerHTML = thisValue[(thisValue.length - 1)];
    }
  });
}