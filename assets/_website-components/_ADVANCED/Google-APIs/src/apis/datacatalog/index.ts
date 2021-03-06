// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {datacatalog_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1beta1: datacatalog_v1beta1.Datacatalog,
};

export function datacatalog(
  version: 'v1beta1'
): datacatalog_v1beta1.Datacatalog;
export function datacatalog(
  options: datacatalog_v1beta1.Options
): datacatalog_v1beta1.Datacatalog;
export function datacatalog<T = datacatalog_v1beta1.Datacatalog>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1beta1' | datacatalog_v1beta1.Options
) {
  return getAPI<T>('datacatalog', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {datacatalog_v1beta1};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  GaxiosPromise,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';
