'use client';

import Header from "@/app/components/layouts/header";
import Footer from "@/app/components/layouts/footer";
import { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<>placeholder</>}>
        <Header />
      </Suspense>
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
} 