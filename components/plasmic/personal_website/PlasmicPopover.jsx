/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jsfcAvrT2gX1xBNiQzA5u6
// Component: hlRZUksCEcpq
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { BaseDialogTrigger } from "@plasmicpkgs/react-aria/skinny/registerDialogTrigger";
import Button from "../../Button"; // plasmic-import: BLHcctsmi76m/component
import { BasePopover } from "@plasmicpkgs/react-aria/skinny/registerPopover";
import OverlayArrow from "../../OverlayArrow"; // plasmic-import: M9ZQL5XXVaTY/component
import { BaseDialog } from "@plasmicpkgs/react-aria/skinny/registerDialog";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: jsfcAvrT2gX1xBNiQzA5u6/projectcss
import sty from "./PlasmicPopover.module.css"; // plasmic-import: hlRZUksCEcpq/css

createPlasmicElementProxy;

export const PlasmicPopover__VariantProps = new Array();

export const PlasmicPopover__ArgProps = new Array(
  "shouldFlip",
  "offset",
  "onOpenChange",
  "showArrow",
  "placement",
  "trigger",
  "content"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPopover__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          shouldFlip: true,
          offset: 12,
          placement: "bottom"
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "ariaDialogTrigger.isOpen",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onChangeProp: "onOpenChange"
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <BaseDialogTrigger
      data-plasmic-name={"ariaDialogTrigger"}
      data-plasmic-override={overrides.ariaDialogTrigger}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.ariaDialogTrigger
      )}
      dialog={
        <BasePopover
          data-plasmic-name={"ariaPopover"}
          data-plasmic-override={overrides.ariaPopover}
          className={classNames("__wab_instance", sty.ariaPopover)}
          matchTriggerWidth={true}
          offset={args.offset}
          placement={args.placement}
          resetClassName={classNames(
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens
          )}
          shouldFlip={args.shouldFlip}
        >
          {$props.showArrow ? (
            <OverlayArrow
              data-plasmic-name={"overlayArrow"}
              data-plasmic-override={overrides.overlayArrow}
              className={classNames("__wab_instance", sty.overlayArrow)}
            />
          ) : null}
          <BaseDialog
            data-plasmic-name={"ariaDialog"}
            data-plasmic-override={overrides.ariaDialog}
            className={classNames("__wab_instance", sty.ariaDialog)}
          >
            {renderPlasmicSlot({
              defaultContents: (
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__i6YhI)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wosJj
                    )}
                  >
                    {"This is a Popover!"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aim2L
                    )}
                  >
                    {"You can put anything here!"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8Qm8W
                    )}
                  >
                    {
                      "Use it in a `Aria Dialog Trigger` component to trigger it on a button click."
                    }
                  </div>
                </Stack__>
              ),

              value: args.content
            })}
          </BaseDialog>
        </BasePopover>
      }
      isOpen={generateStateValueProp($state, ["ariaDialogTrigger", "isOpen"])}
      onOpenChange={async (...eventArgs) => {
        generateStateOnChangeProp($state, [
          "ariaDialogTrigger",
          "isOpen"
        ]).apply(null, eventArgs);
      }}
      trigger={renderPlasmicSlot({
        defaultContents: (
          <Button
            className={classNames("__wab_instance", sty.button__yojhC)}
            label={"Open Popover"}
          />
        ),

        value: args.trigger
      })}
    />
  );
}

const PlasmicDescendants = {
  ariaDialogTrigger: [
    "ariaDialogTrigger",
    "ariaPopover",
    "overlayArrow",
    "ariaDialog"
  ],

  ariaPopover: ["ariaPopover", "overlayArrow", "ariaDialog"],
  overlayArrow: ["overlayArrow"],
  ariaDialog: ["ariaDialog"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPopover__ArgProps,
          internalVariantPropNames: PlasmicPopover__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPopover__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaDialogTrigger") {
    func.displayName = "PlasmicPopover";
  } else {
    func.displayName = `PlasmicPopover.${nodeName}`;
  }
  return func;
}

export const PlasmicPopover = Object.assign(
  // Top-level PlasmicPopover renders the root element
  makeNodeComponent("ariaDialogTrigger"),
  {
    // Helper components rendering sub-elements
    ariaPopover: makeNodeComponent("ariaPopover"),
    overlayArrow: makeNodeComponent("overlayArrow"),
    ariaDialog: makeNodeComponent("ariaDialog"),
    // Metadata about props expected for PlasmicPopover
    internalVariantProps: PlasmicPopover__VariantProps,
    internalArgProps: PlasmicPopover__ArgProps
  }
);

export default PlasmicPopover;
/* prettier-ignore-end */
