/* eslint-disable-next-line */
export type LoadingoverlayProps = {};

export function LoadingOverlay(props: LoadingoverlayProps) {
	return (
		<div
			className="loading-backdrop"
			id="loadingOverlay"
			style={{ display: "block", zIndex: 4 }}
		>
			<div className="loading-circle">
				<div className="preloader-wrapper big active">
					<div className="spinner-layer spinner-white-only">
						<div className="circle-clipper left">
							<div className="circle" />
						</div>
						<div className="gap-patch">
							<div className="circle" />
						</div>
						<div className="circle-clipper right">
							<div className="circle" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoadingOverlay;
