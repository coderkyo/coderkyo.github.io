// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

import "/assets/js/modules/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
import "/assets/js/modules/popper.js/dist/popper.min.js";

import "/assets/js/modules/dist/js/util.js";
import "/assets/js/modules/dist/js/modal.js";
