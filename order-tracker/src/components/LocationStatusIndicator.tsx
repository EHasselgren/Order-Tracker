interface LocationStatusIndicatorProps {
    isOk: boolean;
    customMessage?: string;
    severity?: 'warning' | 'error' | 'critical';
    showIcon?: boolean;
    className?: string;
  }
  
  export const LocationStatusIndicator: React.FC<LocationStatusIndicatorProps> = ({ 
    isOk, 
    customMessage,
    severity = 'warning',
    showIcon = true,
    className = ''
  }) => {
    if (isOk) return null;
  
    const severityConfig = {
      warning: {
        containerClass: 'bg-yellow-50 border-yellow-200',
        textClass: 'text-yellow-700',
        icon: '⚠️',
        defaultMessage: 'Location status: Minor issue reported'
      },
      error: {
        containerClass: 'bg-red-50 border-red-200',
        textClass: 'text-red-600',
        icon: '⛔',
        defaultMessage: 'Location status: Issue reported'
      },
      critical: {
        containerClass: 'bg-red-100 border-red-300',
        textClass: 'text-red-700',
        icon: '❌',
        defaultMessage: 'Location status: Critical issue reported'
      }
    };
  
    const config = severityConfig[severity];
  
    return (
      <span className={`
        ml-2 text-xs rounded px-2 py-1 
        border 
        flex items-center
        ${config.containerClass}
        ${config.textClass}
        ${className}
      `}>
        {showIcon && <span className="mr-1">{config.icon}</span>}
        {customMessage || config.defaultMessage}
      </span>
    );
  };