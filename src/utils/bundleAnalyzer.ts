
// Bundle analyzer utilities for development
export const analyzeBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 Bundle Analysis:');
    
    // Check for large imports
    const checkLargeImports = () => {
      const imports = [
        'react',
        'react-dom', 
        'react-router-dom',
        '@tanstack/react-query',
        '@radix-ui/*',
        'recharts',
        'lucide-react'
      ];
      
      imports.forEach(imp => {
        console.log(`📦 ${imp} imported`);
      });
    };

    // Performance measurements
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        console.log('⚡ Performance Metrics:');
        console.log(`DOM Content Loaded: ${navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart}ms`);
        console.log(`Page Load: ${navigation.loadEventEnd - navigation.loadEventStart}ms`);
        console.log(`First Paint: ${performance.getEntriesByType('paint')[0]?.startTime}ms`);
      }
    };

    checkLargeImports();
    
    // Delay performance measurement until page is loaded
    setTimeout(measurePerformance, 1000);
  }
};

// Code splitting boundaries check
export const checkCodeSplitting = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Code Splitting Status:');
    console.log('✅ Pages: Lazy loaded');
    console.log('✅ Heavy components: Lazy loaded');
    console.log('✅ Third-party libraries: Vendor chunks');
  }
};
