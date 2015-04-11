/**
 * Navigation bar class
 * @param psv (PhotoSphereViewer) A PhotoSphereViewer object
 */
var PSVNavBar = function(psv) {
  this.psv = psv;
  this.container = null;
  this.autorotateBtn = null;
  this.zoomBar = null;
  this.fullscreenBtn = null;
  this.caption = null;

  this.create();
};

/**
 * Creates the elements
 * @return (void)
 */
PSVNavBar.prototype.create = function() {
  // Container
  this.container = document.createElement('div');
  this.container.className = 'psv-navbar';

  // Autorotate button
  this.autorotateBtn = new PSVNavBarAutorotateButton(this.psv);
  this.container.appendChild(this.autorotateBtn.getButton());

  // Zoom buttons
  this.zoomBar = new PSVNavBarZoomButton(this.psv);
  this.container.appendChild(this.zoomBar.getButton());

  // Fullscreen button
  this.fullscreenBtn = new PSVNavBarFullscreenButton(this.psv);
  this.container.appendChild(this.fullscreenBtn.getButton());

  // Caption
  this.caption = document.createElement('div');
  this.caption.className = 'psv-caption';
  this.container.appendChild(this.caption);
  this.setCaption(this.psv.config.caption);
};

/**
 * Returns the bar itself
 * @return (HTMLElement) The bar
 */
PSVNavBar.prototype.getBar = function() {
  return this.container;
};

/**
 * Sets the bar caption
 * @param (string) html
 */
PSVNavBar.prototype.setCaption = function(html) {
  if (!html) {
    this.caption.style.display = 'none';
  }
  else {
    this.caption.style.display = 'block';
    this.caption.innerHTML = html;
  }
};