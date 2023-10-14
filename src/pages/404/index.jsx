import React, { useEffect } from 'react'



const NotFound = () => {
    useEffect(() => {
        var pathSegmentsToKeep = 0;
    
        var l = window.location;
        l.replace(
          l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
          l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
          l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
          (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
          l.hash
        );

        (function(l) {
            if (l.search[1] === '/' ) {
              var decoded = l.search.slice(1).split('&').map(function(s) { 
                return s.replace(/~and~/g, '&')
              }).join('?');
              window.history.replaceState(null, null,
                  l.pathname.slice(0, -1) + decoded + l.hash
              );
            }
          }(window.location))
    }, [])


    return (
        <div></div>
    )
}

export default NotFound