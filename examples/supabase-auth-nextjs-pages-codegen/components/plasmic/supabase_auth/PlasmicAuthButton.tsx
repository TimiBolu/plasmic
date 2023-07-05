// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2gYaa1FsuykK8CmmDLsakd
// Component: 7YgShF9LvY

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton"; // plasmic-import: bx9Xzvf5_eu/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_supabase_auth.module.css"; // plasmic-import: 2gYaa1FsuykK8CmmDLsakd/projectcss
import sty from "./PlasmicAuthButton.module.css"; // plasmic-import: 7YgShF9LvY/css

export type PlasmicAuthButton__VariantMembers = {};
export type PlasmicAuthButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicAuthButton__VariantsArgs;
export const PlasmicAuthButton__VariantProps = new Array<VariantPropType>();

export type PlasmicAuthButton__ArgsType = {};
type ArgPropType = keyof PlasmicAuthButton__ArgsType;
export const PlasmicAuthButton__ArgProps = new Array<ArgPropType>();

export type PlasmicAuthButton__OverridesType = {
  root?: p.Flex<"div">;
  logoutBtn?: p.Flex<typeof AntdButton>;
  loginBtn?: p.Flex<typeof AntdButton>;
};

export interface DefaultAuthButtonProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAuthButton__RenderFunc(props: {
  variants: PlasmicAuthButton__VariantsArgs;
  args: PlasmicAuthButton__ArgsType;
  overrides: PlasmicAuthButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants,
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      {(() => {
        try {
          return currentUser.isLoggedIn;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___82Umc)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__aCq2U
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return `Hi ${currentUser.email}`;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <AntdButton
            data-plasmic-name={"logoutBtn"}
            data-plasmic-override={overrides.logoutBtn}
            className={classNames("__wab_instance", sty.logoutBtn)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__f530Z
              )}
            >
              {"Logout"}
            </div>
          </AntdButton>
        </p.Stack>
      ) : null}
      {(() => {
        try {
          return !currentUser.isLoggedIn;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nzFoq)}
        >
          <AntdButton
            data-plasmic-name={"loginBtn"}
            data-plasmic-override={overrides.loginBtn}
            className={classNames("__wab_instance", sty.loginBtn)}
            onClick={async () => {
              const $steps = {};
              $steps["goToAuth"] = true
                ? (() => {
                    const actionArgs = {
                      destination: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "navigation",
                          interactionUuid: "APt9LTtN5",
                          componentUuid: "7YgShF9LvY",
                          argName: "destination",
                        },
                        () => `/auth`
                      ),
                    };
                    return __wrapUserFunction(
                      {
                        type: "InteractionLoc",
                        actionName: "navigation",
                        interactionUuid: "APt9LTtN5",
                        componentUuid: "7YgShF9LvY",
                      },
                      () =>
                        (({ destination }) => {
                          __nextRouter?.push(destination);
                        })?.apply(null, [actionArgs]),
                      actionArgs
                    );
                  })()
                : undefined;
              if (
                typeof $steps["goToAuth"] === "object" &&
                typeof $steps["goToAuth"].then === "function"
              ) {
                $steps["goToAuth"] = await __wrapUserPromise(
                  {
                    type: "InteractionLoc",
                    actionName: "navigation",
                    interactionUuid: "APt9LTtN5",
                    componentUuid: "7YgShF9LvY",
                  },
                  $steps["goToAuth"]
                );
              }
            }}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__btXwf
              )}
            >
              {"Login"}
            </div>
          </AntdButton>
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logoutBtn", "loginBtn"],
  logoutBtn: ["logoutBtn"],
  loginBtn: ["loginBtn"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  logoutBtn: typeof AntdButton;
  loginBtn: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAuthButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAuthButton__VariantsArgs;
    args?: PlasmicAuthButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAuthButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAuthButton__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAuthButton__ArgProps,
          internalVariantPropNames: PlasmicAuthButton__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicAuthButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuthButton";
  } else {
    func.displayName = `PlasmicAuthButton.${nodeName}`;
  }
  return func;
}

export const PlasmicAuthButton = Object.assign(
  // Top-level PlasmicAuthButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logoutBtn: makeNodeComponent("logoutBtn"),
    loginBtn: makeNodeComponent("loginBtn"),

    // Metadata about props expected for PlasmicAuthButton
    internalVariantProps: PlasmicAuthButton__VariantProps,
    internalArgProps: PlasmicAuthButton__ArgProps,
  }
);

export default PlasmicAuthButton;
/* prettier-ignore-end */
