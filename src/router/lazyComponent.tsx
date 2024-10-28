import { Spin } from "antd";
import { Suspense, ComponentType, ReactElement } from "react";

// 定义 Props 类型，用于以后可能需要的props扩展
interface LazyComponentProps {
  // 这里可以定义该懒加载组件可能接收的props类型
}

const lazyComponent = (LazyComponent: ComponentType<LazyComponentProps>): ReactElement => {
  return (
    <Suspense
    fallback={
      <Spin
					size="large"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%"
					}}
				/>
    }
    >
      <LazyComponent />
    </Suspense>
  );
};

export default lazyComponent;