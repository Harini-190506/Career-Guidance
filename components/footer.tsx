@@ .. @@
   return (
-    <footer className="border-t border-gray-700" style={{ backgroundColor: "#151515" }}>
+    <footer className="border-t border-white/10 bg-gradient-to-r from-gray-900 to-purple-900">
       <div className="container mx-auto px-4 py-12">
         {/* Main Footer Content */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
@@ -42,11 +42,10 @@ export function Footer() {
           <div className="lg:col-span-2">
             <Link href="/" className="flex items-center space-x-3 mb-4">
               <div
-                className="w-10 h-10 rounded-lg flex items-center justify-center"
-                style={{ backgroundColor: "#3C415C" }}
+                className="w-10 h-10 rounded-lg flex items-center justify-center gradient-bg-primary professional-shadow"
               >
-                <Brain className="w-6 h-6" style={{ color: "#B4A5A5" }} />
+                <Brain className="w-6 h-6 text-white" />
               </div>
               <div>
-                <h1 className="text-xl font-bold" style={{ color: "#B4A5A5" }}>
+                <h1 className="text-xl font-bold text-white">
                   CareerSync AI
                 </h1>
@@ .. @@
             {/* Contact Info */}
-            <div className="space-y-2 text-sm opacity-80">
+            <div className="space-y-3 text-sm text-gray-300">
               <div className="flex items-center space-x-2">
-                <Mail className="w-4 h-4" />
+                <Mail className="w-4 h-4 text-purple-400" />
                 <span>hello@careersync.ai</span>
               </div>
               <div className="flex items-center space-x-2">
-                <Phone className="w-4 h-4" />
+                <Phone className="w-4 h-4 text-green-400" />
                 <span>8838593077</span>
               </div>
               <div className="flex items-center space-x-2">
-                <MapPin className="w-4 h-4" />
+                <MapPin className="w-4 h-4 text-blue-400" />
                 <span>Erode, TamilNadu</span>
               </div>
@@ .. @@
           {/* Product Links */}
           <div>
-            <h3 className="font-semibold mb-4" style={{ color: "#B4A5A5" }}>
+            <h3 className="font-semibold mb-4 text-white">
               Product
             </h3>
             <ul className="space-y-2">
               {footerLinks.product.map((link) => (
                 <li key={link.name}>
-                  <Link href={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
+                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                     {link.name}
                   </Link>
                 </li>
@@ .. @@
         {/* Bottom Section */}
-        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
-          <div className="text-sm opacity-80 mb-4 md:mb-0">© 2024 CareerSync AI. All rights reserved.</div>
+        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
+          <div className="text-sm text-gray-300 mb-4 md:mb-0">© 2024 CareerSync AI. All rights reserved.</div>

           {/* Social Links */}
           <div className="flex items-center space-x-4">
             {socialLinks.map((social) => (
               <Link
                 key={social.name}
                 href={social.href}
-                className="p-2 rounded-lg transition-colors hover:bg-gray-800"
+                className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-110"
                 target="_blank"
                 rel="noopener noreferrer"
               >
-                <social.icon className="w-5 h-5 opacity-80 hover:opacity-100" />
+                <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                 <span className="sr-only">{social.name}</span>
               </Link>
             ))}