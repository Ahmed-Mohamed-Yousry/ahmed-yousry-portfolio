'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { marketingResults, marketingStats } from '../../../assets/assets';
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3,
  ArrowUpRight,
  Play,
  Pause
} from 'lucide-react';

const MarketingPage = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [autoPlay, setAutoPlay] = useState(true);

  const length = marketingResults.length;

  const nextSlide = () => setCurrentProject((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrentProject((prev) => (prev - 1 + length) % length);

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, currentProject]);

  const filteredProjects = activeTab === 'all' 
    ? marketingResults 
    : marketingResults.filter(project => project.category === activeTab);

  const categories = ['all', ...new Set(marketingResults.map(project => project.category))];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-[#0a0015] dark:to-[#1a0033] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-Ovo text-gray-900 dark:text-white mb-4"
          >
            نتائج التسويق الرقمي
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-Ovo max-w-2xl mx-auto">
            عرض لإنجازات واستراتيجيات التسويق الناجحة التي حققت نتائج ملموسة للعملاء
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {marketingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-[#7768c3] dark:text-[#ada1f9] font-Ovo">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-Ovo mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-xl font-Ovo transition-all ${
                activeTab === category
                  ? 'bg-[#7768c3] text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-[#ada1f9] hover:text-white'
              }`}
            >
              {category === 'all' ? 'جميع المشاريع' : category}
            </button>
          ))}
        </div>

        {/* Projects Carousel */}
        <div className="relative mb-16">
          {/* Auto-play Controls */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 font-Ovo text-gray-600 dark:text-gray-400 hover:bg-[#ada1f9] hover:text-white transition-all"
            >
              {autoPlay ? <Pause size={16} /> : <Play size={16} />}
              {autoPlay ? 'إيقاف التشغيل التلقائي' : 'التشغيل التلقائي'}
            </button>
          </div>

          <div className="relative h-[600px] flex items-center justify-center">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute sm:left-8 -left-8 z-30 p-3 bg-[#ada1f9] rounded-xl shadow-lg hover:scale-110 transition-all"
            >
              <ChevronLeft size={24} className="text-white dark:text-[#11001f]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute sm:right-8 -right-8 z-30 p-3 bg-[#ada1f9] rounded-xl shadow-lg hover:scale-110 transition-all"
            >
              <ChevronRight size={24} className="text-white dark:text-[#11001f]" />
            </button>

            {/* Project Display */}
            <div className="relative w-full max-w-6xl h-full">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => {
                  if (index !== currentProject) return null;
                  
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                      className="relative w-full h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl"
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900" />
                      
                      <div className="relative h-full flex flex-col md:flex-row">
                        {/* Before/After Images */}
                        <div className="md:w-1/2 p-6 flex flex-col gap-6">
                          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-2xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <span className="font-Ovo text-gray-600 dark:text-gray-400">قبل الحملة</span>
                            </div>
                            <div className="bg-white dark:bg-gray-700 rounded-xl h-48 flex items-center justify-center">
                              <img 
                                src={project.beforeImage} 
                                alt="Before"
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                  e.target.src = 'https://via.placeholder.com/400x200/f3f4f6/9ca3af?text=Before+Campaign';
                                }}
                              />
                            </div>
                          </div>
                          
                          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-2xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="font-Ovo text-gray-600 dark:text-gray-400">بعد الحملة</span>
                            </div>
                            <div className="bg-white dark:bg-gray-700 rounded-xl h-48 flex items-center justify-center">
                              <img 
                                src={project.afterImage} 
                                alt="After"
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                  e.target.src = 'https://via.placeholder.com/400x200/dcfce7/22c55e?text=After+Campaign';
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="md:w-1/2 p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <TrendingUp className="text-[#7768c3]" size={20} />
                              <span className="font-Ovo text-[#7768c3] dark:text-[#ada1f9] text-sm">
                                {project.category}
                              </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold font-Ovo text-gray-900 dark:text-white mb-4">
                              {project.title}
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-400 font-Ovo leading-relaxed mb-6">
                              {project.description}
                            </p>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              {Object.entries(project.metrics).map(([key, value]) => (
                                <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                  <div className="text-lg font-bold text-[#7768c3] dark:text-[#ada1f9] font-Ovo">
                                    {value}
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400 font-Ovo capitalize">
                                    {key}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Platforms & CTA */}
                          <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.platforms.map((platform) => (
                                <span 
                                  key={platform}
                                  className="px-3 py-1 bg-[#ada1f9]/20 text-[#7768c3] dark:text-[#ada1f9] rounded-full text-sm font-Ovo"
                                >
                                  {platform}
                                </span>
                              ))}
                            </div>
                            
                            <button className="w-full bg-[#7768c3] hover:bg-[#ada1f9] text-white font-Ovo py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                              عرض التفاصيل الكاملة
                              <ArrowUpRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentProject(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentProject ? 'bg-[#ada1f9] scale-125' : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center bg-gradient-to-r from-[#7768c3] to-[#ada1f9] rounded-3xl p-8 md:p-12 text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-Ovo mb-4">
            مستعد لتحقيق نتائج مماثلة لمشروعك؟
          </h2>
          <p className="font-Ovo mb-6 opacity-90 max-w-2xl mx-auto">
            دعنا نعمل معاً لتحويل أهدافك إلى واقع ملموس باستراتيجيات تسويق رقمية مدروسة
          </p>
          <button className="bg-white text-[#7768c3] hover:bg-gray-100 font-Ovo px-8 py-3 rounded-xl transition-all">
            تواصل معنا الآن
          </button>
        </motion.div>
      </div>
    </main>
  );
};

export default MarketingPage;