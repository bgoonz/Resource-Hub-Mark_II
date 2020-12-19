"use strict";
// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.



Object.defineProperty(exports, "__esModule", { value: true });
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v1_1 = require("./v1");
exports.storage_v1 = v1_1.storage_v1;
const v1beta2_1 = require("./v1beta2");
exports.storage_v1beta2 = v1beta2_1.storage_v1beta2;
exports.VERSIONS = {
    v1: v1_1.storage_v1.Storage,
    v1beta2: v1beta2_1.storage_v1beta2.Storage,
};
function storage(versionOrOptions) {
    return googleapis_common_1.getAPI('storage', versionOrOptions, exports.VERSIONS, this);
}
exports.storage = storage;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
var googleapis_common_2 = require("googleapis-common");
exports.AuthPlus = googleapis_common_2.AuthPlus;
//# sourceMappingURL=index.js.map
