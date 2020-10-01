"use strict";

var _file_extension_assoc;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function show_help(options) {
  var $help_window = $Window({
    title: options.title || "Help Topics",
    icon: "chm"
  });
  $help_window.addClass("help-window");
  var ignore_one_load = true;
  var back_length = 0;
  var forward_length = 0;
  var $main = $(E("div")).addClass("main");
  var $toolbar = $(E("div")).addClass("toolbar");

  var add_toolbar_button = function add_toolbar_button(name, sprite_n, action_fn, enabled_fn) {
    var $button = $("<button class='lightweight'>").text(name).appendTo($toolbar).on("click", function () {
      action_fn();
    });
    $("<div class='icon'/>").appendTo($button).css({
      backgroundPosition: "".concat(-sprite_n * 55, "px 0px")
    });

    var update_enabled = function update_enabled() {
      $button[0].disabled = enabled_fn && !enabled_fn();
    };

    update_enabled();
    $help_window.on("click", "*", update_enabled);
    $help_window.on("update-buttons", update_enabled);
    return $button;
  };

  var measure_sidebar_width = function measure_sidebar_width() {
    return $contents.outerWidth() + parseFloat(getComputedStyle($contents[0]).getPropertyValue("margin-left")) + parseFloat(getComputedStyle($contents[0]).getPropertyValue("margin-right")) + $resizer.outerWidth();
  };

  var $hide_button = add_toolbar_button("Hide", 0, function () {
    var toggling_width = measure_sidebar_width();
    $contents.hide();
    $resizer.hide();
    $hide_button.hide();
    $show_button.show();
    $help_window.width($help_window.width() - toggling_width);
    $help_window.css("left", $help_window.offset().left + toggling_width);
  });
  var $show_button = add_toolbar_button("Show", 5, function () {
    $contents.show();
    $resizer.show();
    $show_button.hide();
    $hide_button.show();
    var toggling_width = measure_sidebar_width();
    $help_window.width($help_window.width() + toggling_width);
    $help_window.css("left", $help_window.offset().left - toggling_width); // $help_window.applyBounds() would push the window to fit (before trimming it only if needed)
    // Trim the window to fit (especially for if maximized)

    if ($help_window.offset().left < 0) {
      $help_window.width($help_window.width() + $help_window.offset().left);
      $help_window.css("left", 0);
    }
  }).hide();
  add_toolbar_button("Back", 1, function () {
    $iframe[0].contentWindow.history.back();
    ignore_one_load = true;
    back_length -= 1;
    forward_length += 1;
  }, function () {
    return back_length > 0;
  });
  add_toolbar_button("Forward", 2, function () {
    $iframe[0].contentWindow.history.forward();
    ignore_one_load = true;
    forward_length -= 1;
    back_length += 1;
  }, function () {
    return forward_length > 0;
  });
  add_toolbar_button("Options", 3, function () {}, function () {
    return false;
  }); // TODO: hotkey and underline on O

  add_toolbar_button("Web Help", 4, function () {
    iframe.src = "help/online_support.htm";
  });
  var $iframe = $Iframe({
    src: "help/default.html"
  }).addClass("inset-deep");
  var iframe = $iframe[0];
  iframe.$window = $help_window; // for focus handling integration

  var $resizer = $(E("div")).addClass("resizer");
  var $contents = $(E("ul")).addClass("contents inset-deep"); // TODO: fix race conditions

  $iframe.on("load", function () {
    if (!ignore_one_load) {
      back_length += 1;
      forward_length = 0;
    }

    iframe.contentWindow.location.href;
    ignore_one_load = false;
    $help_window.triggerHandler("update-buttons");
  });
  $main.append($contents, $resizer, $iframe);
  $help_window.$content.append($toolbar, $main);
  $help_window.css({
    width: 800,
    height: 600
  });
  $iframe.attr({
    name: "help-frame"
  });
  $iframe.css({
    backgroundColor: "white",
    border: "",
    margin: "1px"
  });
  $contents.css({
    margin: "1px"
  });
  $help_window.center();
  $main.css({
    position: "relative" // for resizer

  });
  var resizer_width = 4;
  $resizer.css({
    cursor: "ew-resize",
    width: resizer_width,
    boxSizing: "border-box",
    background: "var(--ButtonFace)",
    borderLeft: "1px solid var(--ButtonShadow)",
    boxShadow: "inset 1px 0 0 var(--ButtonHilight)",
    top: 0,
    bottom: 0,
    zIndex: 1
  });
  $resizer.on("pointerdown", function (e) {
    var pointermove, _pointerup;

    var getPos = function getPos(e) {
      return Math.min($help_window.width() - 100, Math.max(20, e.clientX - $help_window.$content.offset().left));
    };

    $G.on("pointermove", pointermove = function pointermove(e) {
      $resizer.css({
        position: "absolute",
        left: getPos(e)
      });
      $contents.css({
        marginRight: resizer_width
      });
    });
    $G.on("pointerup", _pointerup = function pointerup(e) {
      $G.off("pointermove", pointermove);
      $G.off("pointerup", _pointerup);
      $resizer.css({
        position: "",
        left: ""
      });
      $contents.css({
        flexBasis: getPos(e) - resizer_width,
        marginRight: ""
      });
    });
  });

  var parse_object_params = function parse_object_params($object) {
    // parse an $(<object>) to a plain object of key value pairs
    var object = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = $object.children("param").get()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var param = _step.value;
        object[param.name] = param.value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return object;
  };

  var $last_expanded;

  var $Item = function $Item(text) {
    var $item = $(E("div")).addClass("item").text(text);
    $item.on("mousedown", function () {
      $contents.find(".item").removeClass("selected");
      $item.addClass("selected");
    });
    $item.on("click", function () {
      var $li = $item.parent();

      if ($li.is(".folder")) {
        if ($last_expanded) {
          $last_expanded.not($li).removeClass("expanded");
        }

        $li.toggleClass("expanded");
        $last_expanded = $li;
      }
    });
    return $item;
  };

  var $default_item_li = $(E("li")).addClass("page");
  $default_item_li.append($Item("Welcome to Help").on("click", function () {
    $iframe.attr({
      src: "help/default.html"
    });
  }));
  $contents.append($default_item_li);

  function renderItem(source_li, $folder_items_ul) {
    var object = parse_object_params($(source_li).children("object"));

    if ($(source_li).find("li").length > 0) {
      var $folder_li = $(E("li")).addClass("folder");
      $folder_li.append($Item(object.Name));
      $contents.append($folder_li);

      var _$folder_items_ul = $(E("ul"));

      $folder_li.append(_$folder_items_ul);
      $(source_li).children("ul").children().get().forEach(function (li) {
        renderItem(li, _$folder_items_ul);
      });
    } else {
      var $item_li = $(E("li")).addClass("page");
      $item_li.append($Item(object.Name).on("click", function () {
        $iframe.attr({
          src: "".concat(options.root, "/").concat(object.Local)
        });
      }));

      if ($folder_items_ul) {
        $folder_items_ul.append($item_li);
      } else {
        $contents.append($item_li);
      }
    }
  }

  $.get(options.contentsFile, function (hhc) {
    $($.parseHTML(hhc)).filter("ul").children().get().forEach(function (li) {
      renderItem(li, null);
    });
  }); // @TODO: keyboard accessability
  // $help_window.on("keydown", (e)=> {
  // 	switch(e.keyCode){
  // 		case 37:
  // 			show_error_message("MOVE IT");
  // 			break;
  // 	}
  // });

  var task = new Task($help_window);
  task.$help_window = $help_window;
  return task;
}

function Notepad(file_path) {
  // TODO: DRY the default file names and title code (use document.title of the page in the iframe, in $IframeWindow)
  var document_title = file_path ? file_name_from_path(file_path) : "Untitled";
  var win_title = document_title + " - Notepad"; // TODO: focus existing window if file is currently open?

  var $win = new $IframeWindow({
    src: "programs/notepad/index.html" + (file_path ? "?path=" + file_path : ""),
    icon: "notepad",
    title: win_title
  });
  $win.onFocus(function () {
    var textarea = $win.iframe.contentWindow.document.querySelector("textarea");

    if (textarea) {
      textarea.focus();
    }
  });
  return new Task($win);
}

Notepad.acceptsFilePaths = true;

function Paint(file_path) {
  var $win = new $IframeWindow({
    src: "programs/jspaint/index.html",
    icon: "paint",
    // NOTE: in Windows 98, "untitled" is lowercase, but TODO: we should just make it consistent
    title: "untitled - Paint"
  });
  var contentWindow = $win.$iframe[0].contentWindow;

  var waitUntil = function waitUntil(test, interval, callback) {
    if (test()) {
      callback();
    } else {
      setTimeout(waitUntil, interval, test, interval, callback);
    }
  }; // it seems like I should be able to use onload here, but when it works (overrides the function),
  // it for some reason *breaks the scrollbar styling* in jspaint
  // I don't know what's going on there
  // contentWindow.addEventListener("load", function(){
  // $(contentWindow).on("load", function(){
  // $win.$iframe.load(function(){
  // $win.$iframe[0].addEventListener("load", function(){


  waitUntil(function () {
    return contentWindow.set_as_wallpaper_centered;
  }, 500, function () {
    // TODO: maybe save the wallpaper in localStorage
    // TODO: maybe use blob URL (if only to not take up so much space in the inspector)
    contentWindow.systemSetAsWallpaperCentered = function (canvas) {
      $desktop.css({
        backgroundImage: "url(" + canvas.toDataURL() + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "auto"
      });
    };

    contentWindow.systemSetAsWallpaperTiled = function (canvas) {
      $desktop.css({
        backgroundImage: "url(" + canvas.toDataURL() + ")",
        backgroundRepeat: "repeat",
        backgroundPosition: "0 0",
        backgroundSize: "auto"
      });
    };

    var $help_window;

    contentWindow.show_help = function () {
      if ($help_window) {
        $help_window.focus();
        return;
      }

      $help_window = show_help({
        title: "Paint Help",
        contentsFile: "programs/jspaint/help/mspaint.hhc",
        root: "programs/jspaint/help"
      }).$help_window;
      $help_window.on("close", function () {
        $help_window = null;
      });
    };

    if (file_path) {
      withFilesystem(function () {
        var fs = BrowserFS.BFSRequire("fs");
        fs.readFile(file_path, function (err, buffer) {
          if (err) {
            return console.error(err);
          }

          var byte_array = new Uint8Array(buffer);
          var blob = new Blob([byte_array]);
          var file_name = file_path.replace(/.*\//g, "");
          var file = new File([blob], file_name);
          contentWindow.open_from_File(file, function () {});
        });
      });
    }

    var old_update_title = contentWindow.update_title;

    contentWindow.update_title = function () {
      old_update_title();
      $win.title(contentWindow.document.title);
    };
  });
  return new Task($win);
}

Paint.acceptsFilePaths = true;

function Minesweeper() {
  var $win = new $IframeWindow({
    src: "programs/minesweeper/index.html",
    icon: "minesweeper",
    title: "Minesweeper",
    innerWidth: 280,
    innerHeight: 320
  });
  return new Task($win);
}

function SoundRecorder(file_path) {
  // TODO: DRY the default file names and title code (use document.title of the page in the iframe, in $IframeWindow)
  var document_title = file_path ? file_name_from_path(file_path) : "Sound";
  var win_title = document_title + " - Sound Recorder"; // TODO: focus existing window if file is currently open?

  var $win = new $IframeWindow({
    src: "programs/sound-recorder/index.html" + (file_path ? "?path=" + file_path : ""),
    icon: "speaker",
    title: win_title,
    innerWidth: 270,
    innerHeight: 108
  });
  return new Task($win);
}

function MyWallet(file_path) {
  // TODO: DRY the default file names and title code (use document.title of the page in the iframe, in $IframeWindow)
  var document_title = file_path ? file_name_from_path(file_path) : "Wallet";
  var win_title = document_title + " - Craft"; // TODO: focus existing window if file is currently open?

  var $win = new $IframeWindow({
    src: "programs/wallet/index.html" + (file_path ? "?path=" + file_path : ""),
    icon: "users_key",
    title: win_title,
    innerWidth: 270,
    innerHeight: 108
  });
  return new Task($win);
}

SoundRecorder.acceptsFilePaths = true;

function Explorer(address) {
  // TODO: DRY the default file names and title code (use document.title of the page in the iframe, in $IframeWindow)
  var document_title = address;
  var win_title = document_title; // TODO: focus existing window if folder is currently open

  var $win = new $IframeWindow({
    src: "programs/explorer/index.html" + (address ? "?address=" + encodeURIComponent(address) : ""),
    icon: "folder-open",
    title: win_title,
    innerWidth: 500,
    innerHeight: 500
  });
  return new Task($win);
}

Explorer.acceptsFilePaths = true;
var webamp_bundle_loaded = false;

var load_winamp_bundle_if_not_loaded = function load_winamp_bundle_if_not_loaded(includeButterchurn, callback) {
  // FIXME: webamp_bundle_loaded not actually set to true when loaded
  // TODO: also maybe handle already-loading-but-not-done
  if (webamp_bundle_loaded) {
    callback();
  } else {
    // TODO: paralellize (if possible)
    $.getScript("programs/winamp/lib/webamp.bundle.min.js", function () {
      if (includeButterchurn) {
        $.getScript("programs/winamp/lib/butterchurn.min.js", function () {
          $.getScript("programs/winamp/lib/butterchurnPresets.min.js", function () {
            callback();
          });
        });
      } else {
        callback();
      }
    });
  }
}; // from https://github.com/jberg/butterchurn/blob/master/src/isSupported.js


var isButterchurnSupported = function isButterchurnSupported() {
  var canvas = document.createElement('canvas');
  var gl;

  try {
    gl = canvas.getContext('webgl2');
  } catch (x) {
    gl = null;
  }

  var webGL2Supported = !!gl;
  var audioApiSupported = !!(window.AudioContext || window.webkitAudioContext);
  return webGL2Supported && audioApiSupported;
};

var webamp;
var $webamp;
var winamp_task;
var winamp_interface;
var winamp_loading = false; // TODO: support opening multiple files at once

function openWinamp(file_path) {
  var filePathToBlob = function filePathToBlob(file_path) {
    return new Promise(function (resolve, reject) {
      withFilesystem(function () {
        var fs = BrowserFS.BFSRequire("fs");
        fs.readFile(file_path, function (err, buffer) {
          if (err) {
            return reject(err);
          }

          var byte_array = new Uint8Array(buffer);
          var blob = new Blob([byte_array]);
          resolve(blob);
        });
      });
    });
  };

  var filePathToTrack = function filePathToTrack(file_path) {
    var blob, blob_url, track;
    return regeneratorRuntime.async(function filePathToTrack$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(filePathToBlob(file_path));

          case 2:
            blob = _context.sent;
            blob_url = URL.createObjectURL(blob); // TODO: revokeObjectURL

            track = {
              url: blob_url,
              defaultName: file_name_from_path(file_path).replace(/\.[a-z0-9]+$/i, "")
            };
            return _context.abrupt("return", track);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var whenLoaded = function whenLoaded() {
    var track;
    return regeneratorRuntime.async(function whenLoaded$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if ($webamp.css("display") === "none") {
              winamp_interface.unminimize();
            }

            winamp_interface.focus();

            if (!file_path) {
              _context2.next = 7;
              break;
            }

            _context2.next = 5;
            return regeneratorRuntime.awrap(filePathToTrack(file_path));

          case 5:
            track = _context2.sent;
            webamp.setTracksToPlay([track]);

          case 7:
            winamp_loading = false;

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  if (winamp_task) {
    whenLoaded();
    return;
  }

  if (winamp_loading) {
    return; // TODO: queue up files?
  }

  winamp_loading = true; // This check creates a WebGL context, so don't do it if you try to open Winamp while it's opening or open.
  // (Otherwise it will lead to "WARNING: Too many active WebGL contexts. Oldest context will be lost.")

  var includeButterchurn = isButterchurnSupported();
  load_winamp_bundle_if_not_loaded(includeButterchurn, function () {
    var webamp_options = {
      initialTracks: [{
        metaData: {
          artist: "DJ Mike Llama",
          title: "Llama Whippin' Intro"
        },
        url: "programs/winamp/mp3/llama-2.91.mp3",
        duration: 5.322286
      }],
      // initialSkin: {
      // 	url: "programs/winamp/skins/base-2.91.wsz",
      // },
      enableHotkeys: true,
      handleTrackDropEvent: function handleTrackDropEvent(event) {
        return Promise.all(dragging_file_paths.map(filePathToTrack));
      } // TODO: filePickers

    };

    if (includeButterchurn) {
      webamp_options.__butterchurnOptions = {
        importButterchurn: function importButterchurn() {
          return Promise.resolve(window.butterchurn);
        },
        getPresets: function getPresets() {
          var presets = window.butterchurnPresets.getPresets();
          return Object.keys(presets).map(function (name) {
            return {
              name: name,
              butterchurnPresetObject: presets[name]
            };
          });
        },
        butterchurnOpen: true
      };
      webamp_options.__initialWindowLayout = {
        main: {
          position: {
            x: 0,
            y: 0
          }
        },
        equalizer: {
          position: {
            x: 0,
            y: 116
          }
        },
        playlist: {
          position: {
            x: 0,
            y: 232
          },
          size: [0, 4]
        },
        milkdrop: {
          position: {
            x: 275,
            y: 0
          },
          size: [7, 12]
        }
      };
    }

    webamp = new Webamp(webamp_options);
    var visual_container = document.createElement("div");
    visual_container.classList.add("webamp-visual-container");
    visual_container.style.position = "absolute";
    visual_container.style.left = "0";
    visual_container.style.right = "0";
    visual_container.style.top = "0";
    visual_container.style.bottom = "0";
    visual_container.style.pointerEvents = "none";
    document.body.appendChild(visual_container); // Render after the skin has loaded.

    webamp.renderWhenReady(visual_container).then(function () {
      window.console && console.log("Webamp rendered");
      $webamp = $("#webamp"); // Bring window to front, initially and when clicked

      $webamp.css({
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: $Window.Z_INDEX++
      });
      var $eventTarget = $({});

      var makeSimpleListenable = function makeSimpleListenable(name) {
        return function (callback) {
          var fn = function fn() {
            callback();
          };

          $eventTarget.on(name, fn);

          var dispose = function dispose() {
            $eventTarget.off(name, fn);
          };

          return dispose;
        };
      };

      winamp_interface = {};
      winamp_interface.onFocus = makeSimpleListenable("focus");
      winamp_interface.onBlur = makeSimpleListenable("blur");
      winamp_interface.onClosed = makeSimpleListenable("closed");

      winamp_interface.getIconName = function () {
        return "winamp2";
      };

      winamp_interface.bringToFront = function () {
        $webamp.css({
          zIndex: $Window.Z_INDEX++
        });
      };

      winamp_interface.focus = function () {
        if (window.focusedWindow === winamp_interface) {
          return;
        }

        window.focusedWindow && focusedWindow.blur();
        winamp_interface.bringToFront(); // TODO: trigger click?
        // on last focused winamp window

        $eventTarget.triggerHandler("focus");
        window.focusedWindow = winamp_interface;
      };

      winamp_interface.blur = function () {
        if (window.focusedWindow !== winamp_interface) {
          return;
        } // TODO


        $eventTarget.triggerHandler("blur");
        window.focusedWindow = null;
      };

      winamp_interface.minimize = function () {
        // TODO: are these actually useful or does webamp hide it?
        $webamp.hide();
      };

      winamp_interface.unminimize = function () {
        // more to the point does this work necsesarilyrdrfsF??
        $webamp.show(); // $webamp.focus();
      };

      winamp_interface.close = function () {
        // not allowing canceling close event in this case (generally used *by* an application (for "Save changes?"), not outside of it)
        // TODO: probably something like winamp_task.close()
        // winamp_interface.triggerHandler("close");
        // winamp_interface.triggerHandler("closed");
        webamp.dispose();
        $webamp.remove();
        $eventTarget.triggerHandler("closed");
        webamp = null;
        $webamp = null;
        winamp_task = null;
        winamp_interface = null;
      };

      winamp_interface.getTitle = function () {
        var taskTitle = "Winamp 2.91";
        var $cell = $webamp.find(".playlist-track-titles .track-cell.current");

        if ($cell.length) {
          taskTitle = "".concat($cell.text(), " - Winamp");

          switch (webamp.getMediaStatus()) {
            case "STOPPED":
              taskTitle = "".concat(taskTitle, " [Stopped]");
              break;

            case "PAUSED":
              taskTitle = "".concat(taskTitle, " [Paused]");
              break;
          }
        }

        return taskTitle;
      };

      mustHaveMethods(winamp_interface, windowInterfaceMethods);
      var raf_id;
      var global_pointerdown;
      winamp_task = new Task(winamp_interface);
      webamp.onClose(function () {
        winamp_interface.close();
        cancelAnimationFrame(raf_id);
        visualizerOverlay.fadeOutAndCleanUp();
        $G.off("pointerdown", global_pointerdown);
      });
      webamp.onMinimize(function () {
        winamp_interface.minimize();
      });

      var updateTitle = function updateTitle(_trackInfo) {
        var taskTitle = winamp_interface.getTitle();
        winamp_task.$task.find(".title").text(taskTitle);
      };

      webamp.onTrackDidChange(updateTitle);
      updateTitle();
      $webamp.on("pointerdown", function () {
        winamp_interface.focus();
      }); // TODO: DRY

      $G.on("pointerdown", global_pointerdown = function global_pointerdown(e) {
        if (e.target.closest("#webamp") !== $webamp[0] && !e.target.closest(".taskbar")) {
          winamp_interface.blur();
        }
      });
      var visualizerOverlay = new VisualizerOverlay($webamp.find(".gen-window canvas")[0], {
        mirror: true,
        stretch: true
      }); // TODO: replace with setInterval
      // Note: can't access butterchurn canvas image data during a requestAnimationFrame here
      // because of double buffering

      var animate = function animate() {
        var windowElements = $(".os-window, .window:not(.gen-window)").toArray();
        windowElements.forEach(function (windowEl) {
          if (!windowEl.hasOverlayCanvas) {
            visualizerOverlay.makeOverlayCanvas(windowEl);
            windowEl.hasOverlayCanvas = true;
          }
        });

        if (webamp.getMediaStatus() === "PLAYING") {
          visualizerOverlay.fadeIn();
        } else {
          visualizerOverlay.fadeOut();
        }

        raf_id = requestAnimationFrame(animate);
      };

      raf_id = requestAnimationFrame(animate);
      whenLoaded();
    }, function (error) {
      // TODO: show_error_message("Failed to load Webamp:", error);
      alert("Failed to render Webamp:\n\n" + error);
      console.error(error);
    });
  });
}

openWinamp.acceptsFilePaths = true;
/*
function saveAsDialog(){
	var $win = new $Window();
	$win.title("Save As");
	return $win;
}
function openFileDialog(){
	var $win = new $Window();
	$win.title("Open");
	return $win;
}
*/

function openURLFile(file_path) {
  withFilesystem(function () {
    var fs = BrowserFS.BFSRequire("fs");
    fs.readFile(file_path, "utf8", function (err, content) {
      if (err) {
        return alert(err);
      } // it's supposed to be an ini-style file, but lets handle files that are literally just a URL as well, just in case


      var match = content.match(/URL\s*=\s*([^\n\r]+)/i);
      var url = match ? match[1] : content;
      Explorer(url);
    });
  });
}

openURLFile.acceptsFilePaths = true;

function openThemeFile(file_path) {
  withFilesystem(function () {
    var fs = BrowserFS.BFSRequire("fs");
    fs.readFile(file_path, "utf8", function (err, content) {
      if (err) {
        return alert(err);
      }

      loadThemeFromText(content);
    });
  });
}

openThemeFile.acceptsFilePaths = true;
var file_extension_associations = (_file_extension_assoc = {
  "": Notepad,
  txt: Notepad,
  md: Notepad,
  json: Notepad,
  js: Notepad,
  css: Notepad,
  html: Notepad,
  gitattributes: Notepad,
  gitignore: Notepad,
  png: Paint,
  jpg: Paint,
  jpeg: Paint,
  gif: Paint,
  webp: Paint,
  bmp: Paint,
  tif: Paint,
  tiff: Paint,
  wav: SoundRecorder,
  mp3: openWinamp,
  ogg: openWinamp,
  wma: openWinamp,
  m4a: openWinamp,
  htm: Explorer
}, _defineProperty(_file_extension_assoc, "html", Explorer), _defineProperty(_file_extension_assoc, "url", openURLFile), _defineProperty(_file_extension_assoc, "theme", openThemeFile), _defineProperty(_file_extension_assoc, "themepack", openThemeFile), _file_extension_assoc); // Note: global executeFile called by explorer

function executeFile(file_path) {
  // execute file with default handler
  // like the START command in CMD.EXE
  withFilesystem(function () {
    var fs = BrowserFS.BFSRequire("fs");
    fs.stat(file_path, function (err, stats) {
      if (err) {
        return alert("Failed to get info about " + file_path + "\n\n" + err);
      }

      if (stats.isDirectory()) {
        Explorer(file_path);
      } else {
        var file_extension = file_extension_from_path(file_path);
        var program = file_extension_associations[file_extension];

        if (program) {
          if (!program.acceptsFilePaths) {
            alert(program.name + " does not support opening files via the virtual filesystem yet");
            return;
          }

          program(file_path);
        } else {
          alert("No program is associated with " + file_extension + " files");
        }
      }
    });
  });
} // TODO: base all the desktop icons off of the filesystem
// Note: `C:\Windows\Desktop` doesn't contain My Computer, My Documents, Network Neighborhood, Recycle Bin, or Internet Explorer,
// or Connect to the Internet, or Setup MSN Internet Access,
// whereas `Desktop` does (that's the full address it shows; it's one of them "special locations")


var add_icon_not_via_filesystem = function add_icon_not_via_filesystem(options) {
  options.icon = $Icon(options.icon, DESKTOP_ICON_SIZE);
  new $FolderViewIcon(options).appendTo($folder_view);
};
/*add_icon_not_via_filesystem({
	title: "My Computer",
	icon: "my-computer",
	open: function(){ executeFile("/"); },
});*/


add_icon_not_via_filesystem({
  title: "My Documents",
  icon: "my-documents-folder",
  open: function open() {
    executeFile("/my-documents");
  }
});
/*add_icon_not_via_filesystem({
	title: "Network Neighborhood",
	icon: "network",
	open: function(){ executeFile("/network-neighborhood"); },
});*/

/*add_icon_not_via_filesystem({
	title: "Recycle Bin",
	icon: "recycle-bin",
	open: function(){ Explorer("https://www.epa.gov/recycle/"); }
});*/

add_icon_not_via_filesystem({
  title: "My Pictures",
  icon: "folder",
  open: function open() {
    executeFile("/my-pictures");
  }
});
add_icon_not_via_filesystem({
  title: "Wallet",
  icon: "user-key",
  open: MyWallet,
  shortcut: true
});
/*add_icon_not_via_filesystem({
	title: "Internet Explorer",
	icon: "internet-explorer",
	open: function(){ Explorer("https://www.google.com/"); }
});*/

add_icon_not_via_filesystem({
  title: "Paint",
  icon: "paint",
  open: Paint,
  shortcut: true
});
add_icon_not_via_filesystem({
  title: "Minesweeper",
  icon: "minesweeper",
  open: Minesweeper,
  shortcut: true
});
/*add_icon_not_via_filesystem({
	title: "Sound Recorder",
	icon: "speaker",
	open: SoundRecorder,
	shortcut: true
});*/

/*add_icon_not_via_filesystem({
	title: "Notepad",
	icon: "notepad",
	open: Notepad,
	shortcut: true
});*/

/*add_icon_not_via_filesystem({
	title: "Winamp",
	icon: "winamp2",
	open: openWinamp,
	shortcut: false
});*/

$folder_view.arrange_icons();