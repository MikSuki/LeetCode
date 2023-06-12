function simplifyPath(path: string): string {
    const arr = path.split('/')
    const res: string[] = []
    arr.forEach(e => {
      if(e == '..'){
        if(res.length > 0) 
          res.pop()
      }
      else if(e != '' && e != '.')
        res.push(e)
    })
    return '/' + res.join('/')
  };