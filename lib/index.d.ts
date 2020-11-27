import * as React from "react";
declare module "react" {
  // props に className? を取る React.FC の拡張型
  type FCX<P = {}> = FC<P & { className?: string }>
  // さらに拡張した props に onClick を取る型（ボタン用）
  type FCXB<P = {}> = FCX<P & { 
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }>
};

type label = string | JSX.Element;

export declare const Button: {

  Simple: React.FCXB<{
    label: label;
  }>;

  Loading: React.FCXB<{
    labels: [label, label];
    isLoading: boolean;
    altClassName?: string;
  }>;

}

