//
//  ReactView.m
//  ReactAGKeyboard
//
//  Created by Jeremy Hicks on 3/11/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "ReactView.h"
#import <RCTRootView.h>

@interface ReactView ()
@property (weak, nonatomic) IBOutlet ReactView *reactView;
@end

@implementation ReactView

- (void)viewDidLoad {
  NSLog(@"--------------------- REACT View");
  // hardcoding our JS to be served from the dev server while we're
  // experimenting with the share extension setup
  NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
  
  // attempt to initialize an RCTRootView and use it as the root view of our
  // plain ‘ol UIViewController
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"CustomKeyboard"
                                               initialProperties:nil
                                                   launchOptions:nil];
//  self.view = rootView;
  [self addSubview:rootView];
  rootView.frame = self.bounds;
}

@end