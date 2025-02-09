function circleCollide(x1, y1, r1, x2, y2, r2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (r1 + r2);
  }
  
  function rectsOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
    return !(
      x1 > x2 + w2 ||
      x1 + w1 < x2 ||
      y1 > y2 + h2 ||
      y1 + h1 < y2
    );
  }
  
  function circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
    let closestX = Math.max(x0, Math.min(cx, x0 + w0));
    let closestY = Math.max(y0, Math.min(cy, y0 + h0));
    let dx = cx - closestX;
    let dy = cy - closestY;
    return (dx * dx + dy * dy) < (r * r);
  }
  