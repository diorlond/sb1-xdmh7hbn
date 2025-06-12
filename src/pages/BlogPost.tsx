import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { getBlogPost, blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  if (!slug) {
    navigate('/blog');
    return null;
  }

  const post = getBlogPost(slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-elegant-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gold-500 mb-4">Article Not Found</h1>
          <p className="text-gray-300 mb-6">The article you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="bg-gold-500 text-elegant-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
     </div>
    );
  }

  const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-elegant-900">
      {/* Header */}
      <div className="bg-elegant-800 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/blog"
            className="text-gold-400 hover:text-gold-300 inline-flex items-center mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover rounded-xl"
            />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gold-500 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm space-x-6 mb-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-elegant-700 text-gold-400 px-3 py-1 rounded-full text-sm flex items-center">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-invert max-w-none">
          <div 
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/\n/g, '<br/>').replace(/#{1,6}\s/g, '<h2 class="text-gold-500 font-serif font-bold text-2xl mt-8 mb-4">').replace(/<br\/><br\/>/g, '</p><p class="mb-6">').replace(/^/, '<p class="mb-6">').replace(/$/, '</p>') 
            }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="bg-elegant-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-gold-500 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {otherPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-elegant-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-gold-500 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3 text-sm">
                      {relatedPost.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${relatedPost.slug}`}
                      className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center transition-colors duration-200 group text-sm"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-3xl font-bold text-elegant-900 mb-4">
            Ready to Experience Excellence?
          </h3>
          <p className="text-elegant-900 text-lg mb-8 opacity-90">
            Contact us today to discover London's finest companionship services
          </p>
          <Link
            to="/contact"
            className="bg-elegant-900 text-gold-500 px-8 py-4 rounded-lg font-semibold hover:bg-elegant-800 transition-colors duration-200 inline-flex items-center"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;