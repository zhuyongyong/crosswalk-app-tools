// Copyright © 2014 Intel Corporation. All rights reserved.
// Use  of this  source  code is  governed by  an Apache v2
// license that can be found in the LICENSE-APACHE-V2 file.

// Run tests silently to avoid spew from tests failing on purpose.
require("../src/Config").setSilentConsole(false);
var Console = require("../src/Console");

exports.tests = {

    progress: function(test) {

        test.expect(4);

        var tags = ["foo", "bar", "baz", "maman"];
        var index = 0;
        var indicator = Console.createInfiniteProgress("foo");
        var interval = setInterval(callback, 300);

        function callback() {

            indicator.update(tags[index]);
            index++;
            test.equal(true, true);

            if (index >= tags.length) {
                Console.log("");
                clearInterval(interval);
                test.done();
                return;
            }
        }
    }
};