import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Plus, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const UploadWorkPage = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [currentProject, setCurrentProject] = useState({
    title: "",
    description: "",
    technologies: "",
    image: null as File | null,
    demoUrl: "",
    codeUrl: ""
  });
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCurrentProject({ ...currentProject, image: file });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProject.title || !currentProject.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const newProject = {
      id: Date.now(),
      ...currentProject,
      imageUrl: currentProject.image ? URL.createObjectURL(currentProject.image) : null
    };

    setProjects([...projects, newProject]);
    setCurrentProject({
      title: "",
      description: "",
      technologies: "",
      image: null,
      demoUrl: "",
      codeUrl: ""
    });

    toast({
      title: "Success",
      description: "Project added successfully!"
    });
  };

  const removeProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upload My Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Add your projects to showcase your skills and experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add New Project
              </CardTitle>
              <CardDescription>
                Fill in the details to showcase your work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="title">Project Title *</Label>
                  <Input
                    id="title"
                    value={currentProject.title}
                    onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                    placeholder="My Awesome Project"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={currentProject.description}
                    onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                    placeholder="Describe what this project does and the problems it solves..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="technologies">Technologies Used</Label>
                  <Input
                    id="technologies"
                    value={currentProject.technologies}
                    onChange={(e) => setCurrentProject({ ...currentProject, technologies: e.target.value })}
                    placeholder="React, TypeScript, Tailwind CSS..."
                  />
                </div>

                <div>
                  <Label htmlFor="image">Project Image</Label>
                  <div className="mt-2">
                    <label htmlFor="image" className="cursor-pointer">
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload project image
                        </p>
                        {currentProject.image && (
                          <p className="text-sm text-primary mt-1">
                            {currentProject.image.name}
                          </p>
                        )}
                      </div>
                    </label>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="demoUrl">Demo URL</Label>
                    <Input
                      id="demoUrl"
                      type="url"
                      value={currentProject.demoUrl}
                      onChange={(e) => setCurrentProject({ ...currentProject, demoUrl: e.target.value })}
                      placeholder="https://demo.example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="codeUrl">Code URL</Label>
                    <Input
                      id="codeUrl"
                      type="url"
                      value={currentProject.codeUrl}
                      onChange={(e) => setCurrentProject({ ...currentProject, codeUrl: e.target.value })}
                      placeholder="https://github.com/username/repo"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Add Project
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Projects Preview */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Projects ({projects.length})</h2>
            <div className="space-y-4">
              {projects.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center text-muted-foreground">
                    No projects uploaded yet. Add your first project to get started!
                  </CardContent>
                </Card>
              ) : (
                projects.map((project) => (
                  <Card key={project.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeProject(project.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                      {project.imageUrl && (
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-32 object-cover rounded mb-3"
                        />
                      )}
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.description}
                      </p>
                      {project.technologies && (
                        <p className="text-xs text-primary mb-2">
                          {project.technologies}
                        </p>
                      )}
                      <div className="flex gap-2">
                        {project.demoUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              Demo
                            </a>
                          </Button>
                        )}
                        {project.codeUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadWorkPage;