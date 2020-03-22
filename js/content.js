(function() {
  const getIssueLink = function() {
    const $header = document.getElementsByClassName('gh-header-title')[0];
    const title = $header.getElementsByClassName('js-issue-title')[0].innerText.trim();
    const number = $header.getElementsByClassName('gh-header-number')[0].innerText.trim();
    const url = window.location.href;
    const type = /^https:\/\/github.com\/(.+)\/(.+)\/issues\/(\d+)/.test(url) ? 'Issue' : 'Pull Request';
    return `[${title} · ${type} ${number}](${url})`;
  };

  const copy = function(){
    const tmp = document.createElement('textarea');
    tmp.style.cssText = 'position:absolute;left:-100%;';
    document.body.appendChild(tmp);
    tmp.value = getIssueLink();
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
  };

  copy();

})();

